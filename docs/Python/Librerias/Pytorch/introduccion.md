---
layout: default
---

# Introducción a Pytorch
* empezando en **Pytorch**, tutorial oficial [Deep Learning with PyTorch: A 60 Minute Blitz](https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html):
    1. [What is Pytorch](https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html):
        + Tensores:
        {% raw %}
        ```python
        #Construct a 5x3 matrix, uninitialized:
        x = torch.empty(5, 3)
        #Construct a randomly initialized matrix:
        x = torch.rand(5, 3)
        #Construct a matrix filled zeros and of dtype long:
        x = torch.zeros(5, 3, dtype=torch.long)
        #Construct a tensor directly from data:
        x = torch.tensor([5.5, 3])
        #create a tensor based on an existing tensor:
        x = x.new_ones(5, 3, dtype=torch.double)     
        x = torch.randn_like(x, dtype=torch.float)
        #Get its size (torch.Size is in fact a tuple, so it supports all tuple operations.):
        print(x.size()) 
        ```
        {% endraw %}
        + Operations:
        {% raw %}
        ```python
        y = torch.rand(5, 3)
        #Addition: syntax 1
        print(x + y)
        #Addition: syntax 2
        print(torch.add(x, y))
        #Addition: providing an output tensor as argument
        result = torch.empty(5, 3)
        torch.add(x, y, out=result)
        #Addition: in-place
        y.add_(x)
        """Note:
        Any operation that mutates a tensor in-place is post-fixed with an _.
        For example: x.copy_(y), x.t_(), will change x.
        """
        #You can use standard NumPy-like indexing:
        print(x[:, 1])
        #Resizing: If you want to resize/reshape tensor, you can use torch.view:
        x = torch.randn(4, 4)
        y = x.view(16)
        z = x.view(-1, 8)  # the size -1 is inferred from other
        ```
        {% endraw %}
        More operations that can be done with tensor can be found in [torch(API)](https://pytorch.org/docs/stable/torch.html)

        + Conversion between Tensor and Numpy array:
        {% raw %}
        ```python
        #pytorch tensor
        a = torch.ones(5)
        b = a.numpy()
        #The change will affect a and b
        a.add_(1)

        #numpy array
        a = np.ones(5)
        b = torch.from_numpy(a)
        #The change will affect a and b
        np.add(a, 1, out=a)
        ```
        {% endraw %}
    2. [Autograd: automatic differentation](https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html)
        
        "automatic differentiation  is a set of techniques to numerically evaluate the derivative of a function specified by a computer program"[[Wikipedia]](https://en.wikipedia.org/wiki/Automatic_differentiation).
        + 